// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.3

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { ComparisonResult } from "./ComparisonResult";

export class CompareNativeTimeResult {
  static encode(message: CompareNativeTimeResult, writer: Writer): void {
    const result = message.result;
    if (result !== null) {
      writer.uint32(10);
      writer.fork();
      ComparisonResult.encode(result, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): CompareNativeTimeResult {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new CompareNativeTimeResult();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = ComparisonResult.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  result: ComparisonResult | null;

  constructor(result: ComparisonResult | null = null) {
    this.result = result;
  }
}

export function encodeCompareNativeTimeResult(
  message: CompareNativeTimeResult
): Uint8Array {
  return Protobuf.encode(message, CompareNativeTimeResult.encode);
}

export function decodeCompareNativeTimeResult(
  buffer: Uint8Array
): CompareNativeTimeResult {
  return Protobuf.decode<CompareNativeTimeResult>(
    buffer,
    CompareNativeTimeResult.decode
  );
}
