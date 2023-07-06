// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.3

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class GetCurrentSlotRequest {
  static encode(message: GetCurrentSlotRequest, writer: Writer): void {}

  static decode(reader: Reader, length: i32): GetCurrentSlotRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new GetCurrentSlotRequest();

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

export function encodeGetCurrentSlotRequest(
  message: GetCurrentSlotRequest
): Uint8Array {
  return Protobuf.encode(message, GetCurrentSlotRequest.encode);
}

export function decodeGetCurrentSlotRequest(
  buffer: Uint8Array
): GetCurrentSlotRequest {
  return Protobuf.decode<GetCurrentSlotRequest>(
    buffer,
    GetCurrentSlotRequest.decode
  );
}
