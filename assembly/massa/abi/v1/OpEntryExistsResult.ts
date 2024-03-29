// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class OpEntryExistsResult {
  static encode(message: OpEntryExistsResult, writer: Writer): void {
    writer.uint32(8);
    writer.bool(message.hasKey);
  }

  static decode(reader: Reader, length: i32): OpEntryExistsResult {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new OpEntryExistsResult();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hasKey = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  hasKey: bool;

  constructor(hasKey: bool = false) {
    this.hasKey = hasKey;
  }
}

export function encodeOpEntryExistsResult(
  message: OpEntryExistsResult
): Uint8Array {
  return Protobuf.encode(message, OpEntryExistsResult.encode);
}

export function decodeOpEntryExistsResult(
  buffer: Uint8Array
): OpEntryExistsResult {
  return Protobuf.decode<OpEntryExistsResult>(
    buffer,
    OpEntryExistsResult.decode
  );
}
