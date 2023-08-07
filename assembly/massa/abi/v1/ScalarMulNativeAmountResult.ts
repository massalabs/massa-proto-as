// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { NativeAmount } from "../../model/v1/NativeAmount";

export class ScalarMulNativeAmountResult {
  static encode(message: ScalarMulNativeAmountResult, writer: Writer): void {
    const product = message.product;
    if (product !== null) {
      writer.uint32(10);
      writer.fork();
      NativeAmount.encode(product, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): ScalarMulNativeAmountResult {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new ScalarMulNativeAmountResult();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.product = NativeAmount.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  product: NativeAmount | null;

  constructor(product: NativeAmount | null = null) {
    this.product = product;
  }
}

export function encodeScalarMulNativeAmountResult(
  message: ScalarMulNativeAmountResult
): Uint8Array {
  return Protobuf.encode(message, ScalarMulNativeAmountResult.encode);
}

export function decodeScalarMulNativeAmountResult(
  buffer: Uint8Array
): ScalarMulNativeAmountResult {
  return Protobuf.decode<ScalarMulNativeAmountResult>(
    buffer,
    ScalarMulNativeAmountResult.decode
  );
}