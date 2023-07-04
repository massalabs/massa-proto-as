// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class AppendDataResult {
  static encode(message: AppendDataResult, writer: Writer): void {}

  static decode(reader: Reader, length: i32): AppendDataResult {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new AppendDataResult();

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

export function encodeAppendDataResult(message: AppendDataResult): Uint8Array {
  return Protobuf.encode(message, AppendDataResult.encode);
}

export function decodeAppendDataResult(buffer: Uint8Array): AppendDataResult {
  return Protobuf.decode<AppendDataResult>(buffer, AppendDataResult.decode);
}
