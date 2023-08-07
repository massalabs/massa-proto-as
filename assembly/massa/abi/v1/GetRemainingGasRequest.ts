// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class GetRemainingGasRequest {
  static encode(message: GetRemainingGasRequest, writer: Writer): void {}

  static decode(reader: Reader, length: i32): GetRemainingGasRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new GetRemainingGasRequest();

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

export function encodeGetRemainingGasRequest(
  message: GetRemainingGasRequest
): Uint8Array {
  return Protobuf.encode(message, GetRemainingGasRequest.encode);
}

export function decodeGetRemainingGasRequest(
  buffer: Uint8Array
): GetRemainingGasRequest {
  return Protobuf.decode<GetRemainingGasRequest>(
    buffer,
    GetRemainingGasRequest.decode
  );
}