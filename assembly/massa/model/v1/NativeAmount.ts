// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class NativeAmount {
  static encode(message: NativeAmount, writer: Writer): void {
    writer.uint32(8);
    writer.uint64(message.mantissa);

    writer.uint32(16);
    writer.uint32(message.scale);
  }

  static decode(reader: Reader, length: i32): NativeAmount {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new NativeAmount();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mantissa = reader.uint64();
          break;

        case 2:
          message.scale = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  mantissa: u64;
  scale: u32;

  constructor(mantissa: u64 = 0, scale: u32 = 0) {
    this.mantissa = mantissa;
    this.scale = scale;
  }
}

export function encodeNativeAmount(message: NativeAmount): Uint8Array {
  return Protobuf.encode(message, NativeAmount.encode);
}

export function decodeNativeAmount(buffer: Uint8Array): NativeAmount {
  return Protobuf.decode<NativeAmount>(buffer, NativeAmount.decode);
}