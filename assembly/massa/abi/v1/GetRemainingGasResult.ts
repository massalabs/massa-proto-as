// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { UInt64Value } from "../../../google/protobuf/UInt64Value";

export class GetRemainingGasResult {
  static encode(message: GetRemainingGasResult, writer: Writer): void {
    const mandatoryRemainingGas = message.mandatoryRemainingGas;
    if (mandatoryRemainingGas !== null) {
      writer.uint32(10);
      writer.fork();
      UInt64Value.encode(mandatoryRemainingGas, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): GetRemainingGasResult {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new GetRemainingGasResult();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mandatoryRemainingGas = UInt64Value.decode(
            reader,
            reader.uint32()
          );
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  mandatoryRemainingGas: UInt64Value | null;

  constructor(mandatoryRemainingGas: UInt64Value | null = null) {
    this.mandatoryRemainingGas = mandatoryRemainingGas;
  }
}

export function encodeGetRemainingGasResult(
  message: GetRemainingGasResult
): Uint8Array {
  return Protobuf.encode(message, GetRemainingGasResult.encode);
}

export function decodeGetRemainingGasResult(
  buffer: Uint8Array
): GetRemainingGasResult {
  return Protobuf.decode<GetRemainingGasResult>(
    buffer,
    GetRemainingGasResult.decode
  );
}
