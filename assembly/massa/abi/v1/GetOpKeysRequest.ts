// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.3

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class GetOpKeysRequest {
  static encode(message: GetOpKeysRequest, writer: Writer): void {
    writer.uint32(10);
    writer.bytes(message.prefix);
  }

  static decode(reader: Reader, length: i32): GetOpKeysRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new GetOpKeysRequest();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.prefix = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  prefix: Uint8Array;

  constructor(prefix: Uint8Array = new Uint8Array(0)) {
    this.prefix = prefix;
  }
}

export function encodeGetOpKeysRequest(message: GetOpKeysRequest): Uint8Array {
  return Protobuf.encode(message, GetOpKeysRequest.encode);
}

export function decodeGetOpKeysRequest(buffer: Uint8Array): GetOpKeysRequest {
  return Protobuf.decode<GetOpKeysRequest>(buffer, GetOpKeysRequest.decode);
}
