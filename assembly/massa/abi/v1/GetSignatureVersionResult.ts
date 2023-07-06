// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class GetSignatureVersionResult {
  static encode(message: GetSignatureVersionResult, writer: Writer): void {
    writer.uint32(8);
    writer.uint64(message.version);
  }

  static decode(reader: Reader, length: i32): GetSignatureVersionResult {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new GetSignatureVersionResult();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  version: u64;

  constructor(version: u64 = 0) {
    this.version = version;
  }
}

export function encodeGetSignatureVersionResult(
  message: GetSignatureVersionResult
): Uint8Array {
  return Protobuf.encode(message, GetSignatureVersionResult.encode);
}

export function decodeGetSignatureVersionResult(
  buffer: Uint8Array
): GetSignatureVersionResult {
  return Protobuf.decode<GetSignatureVersionResult>(
    buffer,
    GetSignatureVersionResult.decode
  );
}
