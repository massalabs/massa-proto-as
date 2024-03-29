// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class KeyPair {
  static encode(message: KeyPair, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.publicKey);

    writer.uint32(18);
    writer.string(message.secretKey);
  }

  static decode(reader: Reader, length: i32): KeyPair {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new KeyPair();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publicKey = reader.string();
          break;

        case 2:
          message.secretKey = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  publicKey: string;
  secretKey: string;

  constructor(publicKey: string = "", secretKey: string = "") {
    this.publicKey = publicKey;
    this.secretKey = secretKey;
  }
}

export function encodeKeyPair(message: KeyPair): Uint8Array {
  return Protobuf.encode(message, KeyPair.encode);
}

export function decodeKeyPair(buffer: Uint8Array): KeyPair {
  return Protobuf.decode<KeyPair>(buffer, KeyPair.decode);
}
