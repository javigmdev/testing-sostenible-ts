/*
Requisitos:
1. Indica al grabador que detenga la grabación cuando el sensor no detecta movimiento
2. Indica al grabador que comience la grabación cuando el sensor detecte movimiento
3. Indica al grabador que detenga la grabación cuando el sensor arroja un error inesperado
4. Comprueba el estado del sensor de movimiento una vez por segundo
*/
export interface MotionSensor {
  isDetectingMotion(): boolean;
}

export interface VideoRecorder {
  startRecording(): void;
  stopRecording(): void;
}

export class SurveillanceController {
  constructor(private sensor: MotionSensor, private recorder: VideoRecorder) {}

  recordMotion(numberOfSeconds = 1) {
    this.range(numberOfSeconds).forEach(() => {
      this.tryToRecordMotion();
      this.waitOneSecond();
    });
  }

  private tryToRecordMotion() {
    try {
      this.sensor.isDetectingMotion()
        ? this.recorder.startRecording()
        : this.recorder.stopRecording();
    } catch (e) {
      this.recorder.stopRecording();
    }
  }

  private waitOneSecond() {
    const aSecond = 1000;
    let startTime = new Date().getTime();
    const endTime = startTime + aSecond;
    while (startTime < endTime) {
      startTime = new Date().getTime();
    }
  }

  private range(length: number) {
    return Array.from({ length }, (_, i) => i);
  }
}
