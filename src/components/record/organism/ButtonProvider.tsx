import recordAudio from "@/util/recordAudio";
import Button from "../molecule/Button";
import { useEffect, useRef, useState } from "react";
import { useMutation } from "react-query";
import { externalApi } from "@/connection";
import { useNavigate } from "react-router-dom";
import useAnalysisStore from "@/store";
import { State } from "fast-jsx/interface";

export default function ButtonProvider({
  isRecordingState,
  className,
}: {
  isRecordingState: State<boolean>;
  className?: string;
}) {
  const [isRecording, setIsRecording] = isRecordingState;
  const { setRequest } = useAnalysisStore();
  const router = useNavigate();
  const [audioUrl, setAudioUrl] = useState<string>("");
  const audioChunks = useRef<Blob[]>([]);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const { mutate } = useMutation({
    mutationKey: ["stt"],
    mutationFn: async (audioUrl: string) => {
      const response = await fetch(audioUrl);
      const blob = await response.blob();
      const file = new File([blob], "recording.mp3", {
        type: "audio/mp3",
      });
      return externalApi.post(file);
    },
    onSuccess: (data) => {
      setRequest(data.text);
      router("/pending");
    },
  });
  useEffect(() => {
    if (!audioUrl) return;
    mutate(audioUrl);
  }, [audioUrl]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        event.preventDefault(); // Prevent default space scrolling
        if (!isRecording) {
          recordAudio({
            isRecordingState,
            audioUrlState: [audioUrl, setAudioUrl],
            chunks: audioChunks,
            mediaRecorderRef,
          });
        } else {
          mediaRecorderRef.current?.stop();
          setIsRecording(false);
        }
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [isRecording, audioUrl]);
  if (!isRecording)
    return (
      <Button
        className={className}
        onClick={() =>
          recordAudio({
            isRecordingState,
            audioUrlState: [audioUrl, setAudioUrl],
            chunks: audioChunks,
            mediaRecorderRef,
          })
        }
      />
    );
  return (
    <Button
      className={className}
      isActivated={true}
      onClick={() => {
        mediaRecorderRef.current?.stop();
        setIsRecording(false);
      }}
    />
  );
}
