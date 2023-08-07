// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class Keccak256Result {
  static encode(message: Keccak256Result, writer: Writer): void {
    writer.uint32(10);
    writer.bytes(message.hash);
  }

  static decode(reader: Reader, length: i32): Keccak256Result {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Keccak256Result();

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

export function encodeKeccak256Result(message: Keccak256Result): Uint8Array {
  return Protobuf.encode(message, Keccak256Result.encode);
}

export function decodeKeccak256Result(buffer: Uint8Array): Keccak256Result {
  return Protobuf.decode<Keccak256Result>(buffer, Keccak256Result.decode);
}