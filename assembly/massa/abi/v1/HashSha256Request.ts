// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.22.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class HashSha256Request {
  static encode(message: HashSha256Request, writer: Writer): void {
    writer.uint32(10);
    writer.bytes(message.data);
  }

  static decode(reader: Reader, length: i32): HashSha256Request {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new HashSha256Request();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  data: Uint8Array;

  constructor(data: Uint8Array = new Uint8Array(0)) {
    this.data = data;
  }
}

export function encodeHashSha256Request(
  message: HashSha256Request
): Uint8Array {
  return Protobuf.encode(message, HashSha256Request.encode);
}

export function decodeHashSha256Request(buffer: Uint8Array): HashSha256Request {
  return Protobuf.decode<HashSha256Request>(buffer, HashSha256Request.decode);
}
