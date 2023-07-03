// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class GenerateEventResult {
  static encode(message: GenerateEventResult, writer: Writer): void {}

  static decode(reader: Reader, length: i32): GenerateEventResult {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new GenerateEventResult();

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

export function encodeGenerateEventResult(
  message: GenerateEventResult
): Uint8Array {
  return Protobuf.encode(message, GenerateEventResult.encode);
}

export function decodeGenerateEventResult(
  buffer: Uint8Array
): GenerateEventResult {
  return Protobuf.decode<GenerateEventResult>(
    buffer,
    GenerateEventResult.decode
  );
}
