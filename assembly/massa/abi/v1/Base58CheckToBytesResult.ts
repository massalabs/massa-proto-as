// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class Base58CheckToBytesResult {
  static encode(message: Base58CheckToBytesResult, writer: Writer): void {
    writer.uint32(10);
    writer.bytes(message.bytes);
  }

  static decode(reader: Reader, length: i32): Base58CheckToBytesResult {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Base58CheckToBytesResult();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bytes = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  bytes: Uint8Array;

  constructor(bytes: Uint8Array = new Uint8Array(0)) {
    this.bytes = bytes;
  }
}

export function encodeBase58CheckToBytesResult(
  message: Base58CheckToBytesResult
): Uint8Array {
  return Protobuf.encode(message, Base58CheckToBytesResult.encode);
}

export function decodeBase58CheckToBytesResult(
  buffer: Uint8Array
): Base58CheckToBytesResult {
  return Protobuf.decode<Base58CheckToBytesResult>(
    buffer,
    Base58CheckToBytesResult.decode
  );
}
