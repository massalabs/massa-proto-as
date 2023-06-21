// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class HasDataResult {
  static encode(message: HasDataResult, writer: Writer): void {
    writer.uint32(8);
    writer.bool(message.hasData);
  }

  static decode(reader: Reader, length: i32): HasDataResult {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new HasDataResult();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hasData = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  hasData: bool;

  constructor(hasData: bool = false) {
    this.hasData = hasData;
  }
}

export function encodeHasDataResult(message: HasDataResult): Uint8Array {
  return Protobuf.encode(message, HasDataResult.encode);
}

export function decodeHasDataResult(buffer: Uint8Array): HasDataResult {
  return Protobuf.decode<HasDataResult>(buffer, HasDataResult.decode);
}
