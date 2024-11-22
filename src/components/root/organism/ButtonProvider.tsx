import { State } from "fast-jsx/interface";
import recordAudio from "@/util/recordAudio";
import StartButton from "../molecule/Button";
import { useEffect, useRef, useState } from "react";
import { useMutation } from "react-query";
import { externalApi } from "@/connection";
import { useNavigate } from "react-router-dom";

export default function ButtonProvider({ className }: { className?: string }) {
  const router = useNavigate();
  const [audioUrl, setAudioUrl] = useState<string>("");
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const audioChunks = useRef<Blob[]>([]);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const { mutate, isSuccess } = useMutation({
    mutationKey: ["stt"],
    mutationFn: async (audioUrl: string) => {
      const response = await fetch(audioUrl);
      const blob = await response.blob();
      const file = new File([blob], "recording.mp3", {
        type: "audio/mp3",
      });
      return externalApi.post(file);
    },
  });
  useEffect(() => {
    if (!audioUrl) return;
    mutate(audioUrl);
  }, [audioUrl]);
  useEffect(() => {
    if (isSuccess) router("/result");
  }, [isSuccess]);
  if (!isRecording)
    return (
      <StartButton
        className={className}
        onClick={() =>
          recordAudio({
            isRecordingState: [isRecording, setIsRecording],
            audioUrlState: [audioUrl, setAudioUrl],
            chunks: audioChunks,
            mediaRecorderRef,
          })
        }
      />
    );
  return (
    <button
      onClick={() => {
        mediaRecorderRef.current?.stop();
        setIsRecording(false);
      }}
    >
      Stop Recording
    </button>
  );
}
