// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class CallerHasWriteAccessRequest {
  static encode(message: CallerHasWriteAccessRequest, writer: Writer): void {}

  static decode(reader: Reader, length: i32): CallerHasWriteAccessRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new CallerHasWriteAccessRequest();

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

export function encodeCallerHasWriteAccessRequest(
  message: CallerHasWriteAccessRequest
): Uint8Array {
  return Protobuf.encode(message, CallerHasWriteAccessRequest.encode);
}

export function decodeCallerHasWriteAccessRequest(
  buffer: Uint8Array
): CallerHasWriteAccessRequest {
  return Protobuf.decode<CallerHasWriteAccessRequest>(
    buffer,
    CallerHasWriteAccessRequest.decode
  );
}
