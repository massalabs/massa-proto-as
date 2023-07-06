// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class BytesToBase58CheckRequest {
  static encode(message: BytesToBase58CheckRequest, writer: Writer): void {
    writer.uint32(10);
    writer.bytes(message.bytes);
  }

  static decode(reader: Reader, length: i32): BytesToBase58CheckRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new BytesToBase58CheckRequest();

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

export function encodeBytesToBase58CheckRequest(
  message: BytesToBase58CheckRequest
): Uint8Array {
  return Protobuf.encode(message, BytesToBase58CheckRequest.encode);
}

export function decodeBytesToBase58CheckRequest(
  buffer: Uint8Array
): BytesToBase58CheckRequest {
  return Protobuf.decode<BytesToBase58CheckRequest>(
    buffer,
    BytesToBase58CheckRequest.decode
  );
}
