// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { NativeTime } from "../../model/v1/NativeTime";

export class CheckedMulNativeTimeResult {
  static encode(message: CheckedMulNativeTimeResult, writer: Writer): void {
    const product = message.product;
    if (product !== null) {
      writer.uint32(10);
      writer.fork();
      NativeTime.encode(product, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): CheckedMulNativeTimeResult {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new CheckedMulNativeTimeResult();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.product = NativeTime.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  product: NativeTime | null;

  constructor(product: NativeTime | null = null) {
    this.product = product;
  }
}

export function encodeCheckedMulNativeTimeResult(
  message: CheckedMulNativeTimeResult
): Uint8Array {
  return Protobuf.encode(message, CheckedMulNativeTimeResult.encode);
}

export function decodeCheckedMulNativeTimeResult(
  buffer: Uint8Array
): CheckedMulNativeTimeResult {
  return Protobuf.decode<CheckedMulNativeTimeResult>(
    buffer,
    CheckedMulNativeTimeResult.decode
  );
}
