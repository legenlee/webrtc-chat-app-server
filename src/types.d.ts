export interface Message {
  type?: "offer" | "answer" | "candidate";
  candidate?: RTCIceCandidate;
  sessionDescription?: RTCSessionDescription;
}
