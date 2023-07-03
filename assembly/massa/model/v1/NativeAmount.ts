// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { UInt64Value } from "../../../google/protobuf/UInt64Value";
import { UInt32Value } from "../../../google/protobuf/UInt32Value";

export class NativeAmount {
  static encode(message: NativeAmount, writer: Writer): void {
    const mandatoryMantissa = message.mandatoryMantissa;
    if (mandatoryMantissa !== null) {
      writer.uint32(10);
      writer.fork();
      UInt64Value.encode(mandatoryMantissa, writer);
      writer.ldelim();
    }

    const mandatoryScale = message.mandatoryScale;
    if (mandatoryScale !== null) {
      writer.uint32(18);
      writer.fork();
      UInt32Value.encode(mandatoryScale, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): NativeAmount {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new NativeAmount();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mandatoryMantissa = UInt64Value.decode(
            reader,
            reader.uint32()
          );
          break;

        case 2:
          message.mandatoryScale = UInt32Value.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  mandatoryMantissa: UInt64Value | null;
  mandatoryScale: UInt32Value | null;

  constructor(
    mandatoryMantissa: UInt64Value | null = null,
    mandatoryScale: UInt32Value | null = null
  ) {
    this.mandatoryMantissa = mandatoryMantissa;
    this.mandatoryScale = mandatoryScale;
  }
}

export function encodeNativeAmount(message: NativeAmount): Uint8Array {
  return Protobuf.encode(message, NativeAmount.encode);
}

export function decodeNativeAmount(buffer: Uint8Array): NativeAmount {
  return Protobuf.decode<NativeAmount>(buffer, NativeAmount.decode);
}
