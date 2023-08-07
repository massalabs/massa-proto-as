// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class CheckPubKeyResult {
  static encode(message: CheckPubKeyResult, writer: Writer): void {
    writer.uint32(8);
    writer.bool(message.isValid);
  }

  static decode(reader: Reader, length: i32): CheckPubKeyResult {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new CheckPubKeyResult();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isValid = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  isValid: bool;

  constructor(isValid: bool = false) {
    this.isValid = isValid;
  }
}

export function encodeCheckPubKeyResult(
  message: CheckPubKeyResult
): Uint8Array {
  return Protobuf.encode(message, CheckPubKeyResult.encode);
}

export function decodeCheckPubKeyResult(buffer: Uint8Array): CheckPubKeyResult {
  return Protobuf.decode<CheckPubKeyResult>(buffer, CheckPubKeyResult.decode);
}