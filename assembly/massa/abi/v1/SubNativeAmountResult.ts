// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { NativeAmount } from "../../model/v1/NativeAmount";

export class SubNativeAmountResult {
  static encode(message: SubNativeAmountResult, writer: Writer): void {
    const difference = message.difference;
    if (difference !== null) {
      writer.uint32(10);
      writer.fork();
      NativeAmount.encode(difference, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): SubNativeAmountResult {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new SubNativeAmountResult();

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

export function encodeSubNativeAmountResult(
  message: SubNativeAmountResult
): Uint8Array {
  return Protobuf.encode(message, SubNativeAmountResult.encode);
}

export function decodeSubNativeAmountResult(
  buffer: Uint8Array
): SubNativeAmountResult {
  return Protobuf.decode<SubNativeAmountResult>(
    buffer,
    SubNativeAmountResult.decode
  );
}
