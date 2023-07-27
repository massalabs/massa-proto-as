// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class BoolValue {
  static encode(message: BoolValue, writer: Writer): void {
    writer.uint32(8);
    writer.bool(message.value);
  }

  static decode(reader: Reader, length: i32): BoolValue {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new BoolValue();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  value: bool;

  constructor(value: bool = false) {
    this.value = value;
  }
}

export function encodeBoolValue(message: BoolValue): Uint8Array {
  return Protobuf.encode(message, BoolValue.encode);
}

export function decodeBoolValue(buffer: Uint8Array): BoolValue {
  return Protobuf.decode<BoolValue>(buffer, BoolValue.decode);
}
