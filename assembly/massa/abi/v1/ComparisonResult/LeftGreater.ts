// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.22.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class LeftGreater {
  static encode(message: LeftGreater, writer: Writer): void {}

  static decode(reader: Reader, length: i32): LeftGreater {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new LeftGreater();

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

export function encodeLeftGreater(message: LeftGreater): Uint8Array {
  return Protobuf.encode(message, LeftGreater.encode);
}

export function decodeLeftGreater(buffer: Uint8Array): LeftGreater {
  return Protobuf.decode<LeftGreater>(buffer, LeftGreater.decode);
}
