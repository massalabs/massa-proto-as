// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.22.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class DateNowRequest {
  static encode(message: DateNowRequest, writer: Writer): void {}

  static decode(reader: Reader, length: i32): DateNowRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new DateNowRequest();

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

export function encodeDateNowRequest(message: DateNowRequest): Uint8Array {
  return Protobuf.encode(message, DateNowRequest.encode);
}

export function decodeDateNowRequest(buffer: Uint8Array): DateNowRequest {
  return Protobuf.decode<DateNowRequest>(buffer, DateNowRequest.decode);
}
