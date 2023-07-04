// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class SeedRequest {
  static encode(message: SeedRequest, writer: Writer): void {}

  static decode(reader: Reader, length: i32): SeedRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new SeedRequest();

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

export function encodeSeedRequest(message: SeedRequest): Uint8Array {
  return Protobuf.encode(message, SeedRequest.encode);
}

export function decodeSeedRequest(buffer: Uint8Array): SeedRequest {
  return Protobuf.decode<SeedRequest>(buffer, SeedRequest.decode);
}
