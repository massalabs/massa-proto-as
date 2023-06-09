// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class NativeHash {
  static encode(message: NativeHash, writer: Writer): void {
    writer.uint32(9);
    writer.fixed64(message.version);

    writer.uint32(18);
    writer.bytes(message.content);
  }

  static decode(reader: Reader, length: i32): NativeHash {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new NativeHash();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.fixed64();
          break;

        case 2:
          message.content = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  version: i64;
  content: Uint8Array;

  constructor(version: i64 = 0, content: Uint8Array = new Uint8Array(0)) {
    this.version = version;
    this.content = content;
  }
}

export function encodeNativeHash(message: NativeHash): Uint8Array {
  return Protobuf.encode(message, NativeHash.encode);
}

export function decodeNativeHash(buffer: Uint8Array): NativeHash {
  return Protobuf.decode<NativeHash>(buffer, NativeHash.decode);
}
