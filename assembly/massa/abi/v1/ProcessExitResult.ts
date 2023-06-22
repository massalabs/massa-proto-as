// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.22.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class ProcessExitResult {
  static encode(message: ProcessExitResult, writer: Writer): void {}

  static decode(reader: Reader, length: i32): ProcessExitResult {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new ProcessExitResult();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  constructor() {}
}

export function encodeProcessExitResult(
  message: ProcessExitResult
): Uint8Array {
  return Protobuf.encode(message, ProcessExitResult.encode);
}

export function decodeProcessExitResult(buffer: Uint8Array): ProcessExitResult {
  return Protobuf.decode<ProcessExitResult>(buffer, ProcessExitResult.decode);
}
