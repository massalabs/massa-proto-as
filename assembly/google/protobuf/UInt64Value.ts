// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.3

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class UInt64Value {
  static encode(message: UInt64Value, writer: Writer): void {
    writer.uint32(8);
    writer.uint64(message.value);
  }

  static decode(reader: Reader, length: i32): UInt64Value {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new UInt64Value();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  value: u64;

  constructor(value: u64 = 0) {
    this.value = value;
  }
}

export function encodeUInt64Value(message: UInt64Value): Uint8Array {
  return Protobuf.encode(message, UInt64Value.encode);
}

export function decodeUInt64Value(buffer: Uint8Array): UInt64Value {
  return Protobuf.decode<UInt64Value>(buffer, UInt64Value.decode);
}
