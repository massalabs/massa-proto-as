// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class HashBlake3Result {
  static encode(message: HashBlake3Result, writer: Writer): void {
    writer.uint32(10);
    writer.bytes(message.hash);
  }

  static decode(reader: Reader, length: i32): HashBlake3Result {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new HashBlake3Result();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  hash: Uint8Array;

  constructor(hash: Uint8Array = new Uint8Array(0)) {
    this.hash = hash;
  }
}

export function encodeHashBlake3Result(message: HashBlake3Result): Uint8Array {
  return Protobuf.encode(message, HashBlake3Result.encode);
}

export function decodeHashBlake3Result(buffer: Uint8Array): HashBlake3Result {
  return Protobuf.decode<HashBlake3Result>(buffer, HashBlake3Result.decode);
}
