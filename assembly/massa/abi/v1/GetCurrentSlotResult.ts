// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.3

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { Slot } from "../../model/v1/Slot";

export class GetCurrentSlotResult {
  static encode(message: GetCurrentSlotResult, writer: Writer): void {
    const slot = message.slot;
    if (slot !== null) {
      writer.uint32(10);
      writer.fork();
      Slot.encode(slot, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): GetCurrentSlotResult {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new GetCurrentSlotResult();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.slot = Slot.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  slot: Slot | null;

  constructor(slot: Slot | null = null) {
    this.slot = slot;
  }
}

export function encodeGetCurrentSlotResult(
  message: GetCurrentSlotResult
): Uint8Array {
  return Protobuf.encode(message, GetCurrentSlotResult.encode);
}

export function decodeGetCurrentSlotResult(
  buffer: Uint8Array
): GetCurrentSlotResult {
  return Protobuf.decode<GetCurrentSlotResult>(
    buffer,
    GetCurrentSlotResult.decode
  );
}
