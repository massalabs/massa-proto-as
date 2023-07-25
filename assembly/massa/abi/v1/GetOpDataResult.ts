// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.3

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class GetOpDataResult {
  static encode(message: GetOpDataResult, writer: Writer): void {
    writer.uint32(10);
    writer.bytes(message.value);
  }

  static decode(reader: Reader, length: i32): GetOpDataResult {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new GetOpDataResult();

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

export function encodeGetOpDataResult(message: GetOpDataResult): Uint8Array {
  return Protobuf.encode(message, GetOpDataResult.encode);
}

export function decodeGetOpDataResult(buffer: Uint8Array): GetOpDataResult {
  return Protobuf.decode<GetOpDataResult>(buffer, GetOpDataResult.decode);
}
