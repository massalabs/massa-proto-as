// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.22.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class GetOpKeysRequest {
  static encode(message: GetOpKeysRequest, writer: Writer): void {}

  static decode(reader: Reader, length: i32): GetOpKeysRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new GetOpKeysRequest();

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

export function encodeGetOpKeysRequest(message: GetOpKeysRequest): Uint8Array {
  return Protobuf.encode(message, GetOpKeysRequest.encode);
}

export function decodeGetOpKeysRequest(buffer: Uint8Array): GetOpKeysRequest {
  return Protobuf.decode<GetOpKeysRequest>(buffer, GetOpKeysRequest.decode);
}
