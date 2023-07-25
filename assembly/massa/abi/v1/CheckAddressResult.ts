// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.3

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class CheckAddressResult {
  static encode(message: CheckAddressResult, writer: Writer): void {
    writer.uint32(8);
    writer.bool(message.isValid);
  }

  static decode(reader: Reader, length: i32): CheckAddressResult {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new CheckAddressResult();

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

export function encodeCheckAddressResult(
  message: CheckAddressResult
): Uint8Array {
  return Protobuf.encode(message, CheckAddressResult.encode);
}

export function decodeCheckAddressResult(
  buffer: Uint8Array
): CheckAddressResult {
  return Protobuf.decode<CheckAddressResult>(buffer, CheckAddressResult.decode);
}
