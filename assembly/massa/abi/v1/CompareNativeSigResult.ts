// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { ComparisonResult } from "./ComparisonResult";

export class CompareNativeSigResult {
  static encode(message: CompareNativeSigResult, writer: Writer): void {
    const result = message.result;
    if (result !== null) {
      writer.uint32(10);
      writer.fork();
      ComparisonResult.encode(result, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): CompareNativeSigResult {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new CompareNativeSigResult();

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

export function encodeCompareNativeSigResult(
  message: CompareNativeSigResult
): Uint8Array {
  return Protobuf.encode(message, CompareNativeSigResult.encode);
}

export function decodeCompareNativeSigResult(
  buffer: Uint8Array
): CompareNativeSigResult {
  return Protobuf.decode<CompareNativeSigResult>(
    buffer,
    CompareNativeSigResult.decode
  );
}
