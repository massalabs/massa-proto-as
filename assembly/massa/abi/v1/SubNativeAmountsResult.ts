// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.22.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { NativeAmount } from "..\\..\\model\\v1\\NativeAmount";

export class SubNativeAmountsResult {
  static encode(message: SubNativeAmountsResult, writer: Writer): void {
    const difference = message.difference;
    if (difference !== null) {
      writer.uint32(10);
      writer.fork();
      NativeAmount.encode(difference, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): SubNativeAmountsResult {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new SubNativeAmountsResult();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.difference = NativeAmount.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  difference: NativeAmount | null;

  constructor(difference: NativeAmount | null = null) {
    this.difference = difference;
  }
}

export function encodeSubNativeAmountsResult(
  message: SubNativeAmountsResult
): Uint8Array {
  return Protobuf.encode(message, SubNativeAmountsResult.encode);
}

export function decodeSubNativeAmountsResult(
  buffer: Uint8Array
): SubNativeAmountsResult {
  return Protobuf.decode<SubNativeAmountsResult>(
    buffer,
    SubNativeAmountsResult.decode
  );
}
