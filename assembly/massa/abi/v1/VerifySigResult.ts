// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class VerifySigResult {
  static encode(message: VerifySigResult, writer: Writer): void {
    writer.uint32(8);
    writer.bool(message.isVerified);
  }

  static decode(reader: Reader, length: i32): VerifySigResult {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new VerifySigResult();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isVerified = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  isVerified: bool;

  constructor(isVerified: bool = false) {
    this.isVerified = isVerified;
  }
}

export function encodeVerifySigResult(message: VerifySigResult): Uint8Array {
  return Protobuf.encode(message, VerifySigResult.encode);
}

export function decodeVerifySigResult(buffer: Uint8Array): VerifySigResult {
  return Protobuf.decode<VerifySigResult>(buffer, VerifySigResult.decode);
}
