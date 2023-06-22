// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class GetBalanceRequest {
  static encode(message: GetBalanceRequest, writer: Writer): void {}

  static decode(reader: Reader, length: i32): GetBalanceRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new GetBalanceRequest();

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

export function encodeGetBalanceRequest(
  message: GetBalanceRequest
): Uint8Array {
  return Protobuf.encode(message, GetBalanceRequest.encode);
}

export function decodeGetBalanceRequest(buffer: Uint8Array): GetBalanceRequest {
  return Protobuf.decode<GetBalanceRequest>(buffer, GetBalanceRequest.decode);
}
