// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class GetDataResult {
  static encode(message: GetDataResult, writer: Writer): void {
    writer.uint32(10);
    writer.bytes(message.value);
  }

  static decode(reader: Reader, length: i32): GetDataResult {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new GetDataResult();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  value: Uint8Array;

  constructor(value: Uint8Array = new Uint8Array(0)) {
    this.value = value;
  }
}

export function encodeGetDataResult(message: GetDataResult): Uint8Array {
  return Protobuf.encode(message, GetDataResult.encode);
}

export function decodeGetDataResult(buffer: Uint8Array): GetDataResult {
  return Protobuf.decode<GetDataResult>(buffer, GetDataResult.decode);
}
