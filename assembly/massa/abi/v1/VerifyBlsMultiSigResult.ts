// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.22.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class VerifyBlsMultiSigResult {
  static encode(message: VerifyBlsMultiSigResult, writer: Writer): void {
    writer.uint32(8);
    writer.bool(message.isVerified);
  }

  static decode(reader: Reader, length: i32): VerifyBlsMultiSigResult {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new VerifyBlsMultiSigResult();

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

export function encodeVerifyBlsMultiSigResult(
  message: VerifyBlsMultiSigResult
): Uint8Array {
  return Protobuf.encode(message, VerifyBlsMultiSigResult.encode);
}

export function decodeVerifyBlsMultiSigResult(
  buffer: Uint8Array
): VerifyBlsMultiSigResult {
  return Protobuf.decode<VerifyBlsMultiSigResult>(
    buffer,
    VerifyBlsMultiSigResult.decode
  );
}
