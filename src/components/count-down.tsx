"use client";

import { useState, useRef, useEffect, ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Countdown() {
  const [duration, setDuration] = useState<number | string>("");
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleSetDuration = (): void => {
    if (typeof duration === "number" && duration > 0) {
      setTimeLeft(duration);
      setIsActive(false);
      setIsPaused(false);
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
  };

  const handleStart = (): void => {
    if (timeLeft > 0) {
      setIsActive(true);
      setIsPaused(false);
    }
  };

  const handlePause = (): void => {
    if (isActive) {
      setIsPaused(true);
      setIsActive(false);
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
  };

  const handleReset = (): void => {
    setIsActive(false);
    setIsPaused(false);
    setTimeLeft(typeof duration === "number" ? duration : 0);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  useEffect(() => {
    if (isActive && !isPaused) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timerRef.current!);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isActive, isPaused]);

  useEffect(() => {
    if (timeLeft === 0 && isActive) {
      if (!audioRef.current) {
        audioRef.current = new Audio("/beep.mp3");
      }

      audioRef.current.play().catch((err) => {
        console.warn("Autoplay failed:", err);
      });

      const stopSound = setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        }
      }, 5000);

      return () => clearTimeout(stopSound);
    }
  }, [timeLeft, isActive]);

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  const handleDurationChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setDuration(Number(e.target.value) || "");
  };

  return (

  <div className="flex flex-col items-center justify-center h-screen bg-black dark:bg-black px-4">
    {/* Banner */}
    <div className="mb-6 bg-blue-900 text-cyan-200 px-4 py-2 rounded-md text-sm text-center shadow-md">
      💡 Guide below explains how to use this countdown timer.
    </div>

    {/* Timer box container */}
    <div className="bg-gray-900 dark:bg-gray-900 shadow-lg rounded-lg p-8 w-full max-w-md">
      <h1 className="text-2xl font-bold mb-4 text-gray-200 text-center">
        Countdown Timer
      </h1>

      <div className="flex items-center mb-6">
        <Input
          type="number"
          id="duration"
          placeholder="Enter duration in seconds"
          value={duration}
          onChange={handleDurationChange}
          className="flex-1 mr-4 rounded-md border-gray-600 bg-gray-800 text-gray-200"
        />
        <Button
          onClick={handleSetDuration}
          variant="outline"
          className="text-gray-200 border-gray-600 hover:text-cyan-400 hover:border-cyan-400 cursor-pointer"
        >
          Set
        </Button>
      </div>

      <div className="text-6xl font-bold text-gray-200 mb-8 text-center">
        {formatTime(timeLeft)}
      </div>

      <div className="flex justify-center gap-4">
        <Button
          onClick={handleStart}
          variant="outline"
          className="text-gray-200 border-gray-600 hover:text-cyan-400 hover:border-cyan-400 cursor-pointer"
        >
          {isPaused ? "Resume" : "Start"}
        </Button>
        <Button
          onClick={handlePause}
          variant="outline"
          className="text-gray-200 border-gray-600 hover:text-cyan-400 hover:border-cyan-400 cursor-pointer"
        >
          Pause
        </Button>
        <Button
          onClick={handleReset}
          variant="outline"
          className="text-gray-200 border-gray-600 hover:text-cyan-400 hover:border-cyan-400 cursor-pointer"
        >
          Reset
        </Button>
      </div>
    </div>
        <div className="mb-6 bg-blue-900 mt-4 text-cyan-200 px-4 py-2 rounded-md text-sm text-center shadow-md">
      💡 Time Duration Table are also given (below)
    </div>
  </div>
  );
}