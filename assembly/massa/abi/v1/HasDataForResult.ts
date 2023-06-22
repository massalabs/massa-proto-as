// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class HasDataForResult {
  static encode(message: HasDataForResult, writer: Writer): void {
    writer.uint32(8);
    writer.bool(message.hasData);
  }

  static decode(reader: Reader, length: i32): HasDataForResult {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new HasDataForResult();

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

export function encodeHasDataForResult(message: HasDataForResult): Uint8Array {
  return Protobuf.encode(message, HasDataForResult.encode);
}

export function decodeHasDataForResult(buffer: Uint8Array): HasDataForResult {
  return Protobuf.decode<HasDataForResult>(buffer, HasDataForResult.decode);
}
