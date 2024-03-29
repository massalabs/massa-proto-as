// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class StringValue {
  static encode(message: StringValue, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.value);
  }

  static decode(reader: Reader, length: i32): StringValue {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new StringValue();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  value: string;

  constructor(value: string = "") {
    this.value = value;
  }
}

export function encodeStringValue(message: StringValue): Uint8Array {
  return Protobuf.encode(message, StringValue.encode);
}

export function decodeStringValue(buffer: Uint8Array): StringValue {
  return Protobuf.decode<StringValue>(buffer, StringValue.decode);
}
