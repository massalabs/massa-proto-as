// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class CallerHasWriteAccessResult {
  static encode(message: CallerHasWriteAccessResult, writer: Writer): void {
    writer.uint32(8);
    writer.bool(message.hasWriteAccess);
  }

  static decode(reader: Reader, length: i32): CallerHasWriteAccessResult {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new CallerHasWriteAccessResult();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hasWriteAccess = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  hasWriteAccess: bool;

  constructor(hasWriteAccess: bool = false) {
    this.hasWriteAccess = hasWriteAccess;
  }
}

export function encodeCallerHasWriteAccessResult(
  message: CallerHasWriteAccessResult
): Uint8Array {
  return Protobuf.encode(message, CallerHasWriteAccessResult.encode);
}

export function decodeCallerHasWriteAccessResult(
  buffer: Uint8Array
): CallerHasWriteAccessResult {
  return Protobuf.decode<CallerHasWriteAccessResult>(
    buffer,
    CallerHasWriteAccessResult.decode
  );
}