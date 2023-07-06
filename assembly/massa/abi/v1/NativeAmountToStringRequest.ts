// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { NativeAmount } from "../../model/v1/NativeAmount";

export class NativeAmountToStringRequest {
  static encode(message: NativeAmountToStringRequest, writer: Writer): void {
    const toConvert = message.toConvert;
    if (toConvert !== null) {
      writer.uint32(10);
      writer.fork();
      NativeAmount.encode(toConvert, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): NativeAmountToStringRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new NativeAmountToStringRequest();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.toConvert = NativeAmount.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  toConvert: NativeAmount | null;

  constructor(toConvert: NativeAmount | null = null) {
    this.toConvert = toConvert;
  }
}

export function encodeNativeAmountToStringRequest(
  message: NativeAmountToStringRequest
): Uint8Array {
  return Protobuf.encode(message, NativeAmountToStringRequest.encode);
}

export function decodeNativeAmountToStringRequest(
  buffer: Uint8Array
): NativeAmountToStringRequest {
  return Protobuf.decode<NativeAmountToStringRequest>(
    buffer,
    NativeAmountToStringRequest.decode
  );
}
