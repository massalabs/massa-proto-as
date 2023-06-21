// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class GetCurrentThreadRequest {
  static encode(message: GetCurrentThreadRequest, writer: Writer): void {}

  static decode(reader: Reader, length: i32): GetCurrentThreadRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new GetCurrentThreadRequest();

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

export function encodeGetCurrentThreadRequest(
  message: GetCurrentThreadRequest
): Uint8Array {
  return Protobuf.encode(message, GetCurrentThreadRequest.encode);
}

export function decodeGetCurrentThreadRequest(
  buffer: Uint8Array
): GetCurrentThreadRequest {
  return Protobuf.decode<GetCurrentThreadRequest>(
    buffer,
    GetCurrentThreadRequest.decode
  );
}