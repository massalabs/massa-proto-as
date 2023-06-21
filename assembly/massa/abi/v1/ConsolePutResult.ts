// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class ConsolePutResult {
  static encode(message: ConsolePutResult, writer: Writer): void {}

  static decode(reader: Reader, length: i32): ConsolePutResult {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new ConsolePutResult();

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

export function encodeConsolePutResult(message: ConsolePutResult): Uint8Array {
  return Protobuf.encode(message, ConsolePutResult.encode);
}

export function decodeConsolePutResult(buffer: Uint8Array): ConsolePutResult {
  return Protobuf.decode<ConsolePutResult>(buffer, ConsolePutResult.decode);
}