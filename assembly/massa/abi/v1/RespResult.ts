// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { NativeAddressToStringResult } from "./NativeAddressToStringResult";
import { NativePubKeyToStringResult } from "./NativePubKeyToStringResult";
import { NativeSigToStringResult } from "./NativeSigToStringResult";
import { NativeHashToStringResult } from "./NativeHashToStringResult";
import { NativeAmountToStringResult } from "./NativeAmountToStringResult";
import { NativeAddressFromStringResult } from "./NativeAddressFromStringResult";
import { NativePubKeyFromStringResult } from "./NativePubKeyFromStringResult";
import { NativeSigFromStringResult } from "./NativeSigFromStringResult";
import { NativeHashFromStringResult } from "./NativeHashFromStringResult";
import { NativeAmountFromStringResult } from "./NativeAmountFromStringResult";
import { CheckNativeAddressResult } from "./CheckNativeAddressResult";
import { CheckNativePubKeyResult } from "./CheckNativePubKeyResult";
import { CheckNativeSigResult } from "./CheckNativeSigResult";
import { CheckNativeHashResult } from "./CheckNativeHashResult";
import { CheckNativeAmountResult } from "./CheckNativeAmountResult";
import { AddNativeAmountsResult } from "./AddNativeAmountsResult";
import { SubNativeAmountsResult } from "./SubNativeAmountsResult";
import { MulNativeAmountResult } from "./MulNativeAmountResult";
import { ScalarDivRemNativeAmountResult } from "./ScalarDivRemNativeAmountResult";
import { DivRemNativeAmountResult } from "./DivRemNativeAmountResult";
import { CheckedAddNativeTimeResult } from "./CheckedAddNativeTimeResult";
import { CheckedSubNativeTimeResult } from "./CheckedSubNativeTimeResult";
import { CheckedMulNativeTimeResult } from "./CheckedMulNativeTimeResult";
import { CheckedScalarDivRemNativeTimeResult } from "./CheckedScalarDivRemNativeTimeResult";
import { CheckedDivRemNativeTimeResult } from "./CheckedDivRemNativeTimeResult";
import { CompareNativeTimeResult } from "./CompareNativeTimeResult";
import { CompareNativeAddressResult } from "./CompareNativeAddressResult";
import { CompareNativePubKeyResult } from "./CompareNativePubKeyResult";
import { CompareNativeSigResult } from "./CompareNativeSigResult";
import { VerifyNativeSigResult } from "./VerifyNativeSigResult";
import { CompareNativeAmountResult } from "./CompareNativeAmountResult";
import { Keccak256Result } from "./Keccak256Result";
import { VerifyEvmSigResult } from "./VerifyEvmSigResult";
import { VerifyBlsSingleSigResult } from "./VerifyBlsSingleSigResult";
import { VerifyBlsMultiSigResult } from "./VerifyBlsMultiSigResult";
import { TransferCoinsResult } from "./TransferCoinsResult";
import { GenerateEventResult } from "./GenerateEventResult";

export class RespResult {
  static encode(message: RespResult, writer: Writer): void {
    const nativeAddressToStringResult = message.nativeAddressToStringResult;
    if (nativeAddressToStringResult !== null) {
      writer.uint32(10);
      writer.fork();
      NativeAddressToStringResult.encode(nativeAddressToStringResult, writer);
      writer.ldelim();
    }

    const nativePubKeyToStringResult = message.nativePubKeyToStringResult;
    if (nativePubKeyToStringResult !== null) {
      writer.uint32(18);
      writer.fork();
      NativePubKeyToStringResult.encode(nativePubKeyToStringResult, writer);
      writer.ldelim();
    }

    const nativeSigToStringResult = message.nativeSigToStringResult;
    if (nativeSigToStringResult !== null) {
      writer.uint32(26);
      writer.fork();
      NativeSigToStringResult.encode(nativeSigToStringResult, writer);
      writer.ldelim();
    }

    const nativeHashToStringResult = message.nativeHashToStringResult;
    if (nativeHashToStringResult !== null) {
      writer.uint32(34);
      writer.fork();
      NativeHashToStringResult.encode(nativeHashToStringResult, writer);
      writer.ldelim();
    }

    const nativeAmountToStringResult = message.nativeAmountToStringResult;
    if (nativeAmountToStringResult !== null) {
      writer.uint32(42);
      writer.fork();
      NativeAmountToStringResult.encode(nativeAmountToStringResult, writer);
      writer.ldelim();
    }

    const nativeAddressFromStringResult = message.nativeAddressFromStringResult;
    if (nativeAddressFromStringResult !== null) {
      writer.uint32(50);
      writer.fork();
      NativeAddressFromStringResult.encode(
        nativeAddressFromStringResult,
        writer
      );
      writer.ldelim();
    }

    const nativePubKeyFromStringResult = message.nativePubKeyFromStringResult;
    if (nativePubKeyFromStringResult !== null) {
      writer.uint32(58);
      writer.fork();
      NativePubKeyFromStringResult.encode(nativePubKeyFromStringResult, writer);
      writer.ldelim();
    }

    const nativeSigFromStringResult = message.nativeSigFromStringResult;
    if (nativeSigFromStringResult !== null) {
      writer.uint32(66);
      writer.fork();
      NativeSigFromStringResult.encode(nativeSigFromStringResult, writer);
      writer.ldelim();
    }

    const nativeHashFromStringResult = message.nativeHashFromStringResult;
    if (nativeHashFromStringResult !== null) {
      writer.uint32(74);
      writer.fork();
      NativeHashFromStringResult.encode(nativeHashFromStringResult, writer);
      writer.ldelim();
    }

    const nativeAmountFromStringResult = message.nativeAmountFromStringResult;
    if (nativeAmountFromStringResult !== null) {
      writer.uint32(82);
      writer.fork();
      NativeAmountFromStringResult.encode(nativeAmountFromStringResult, writer);
      writer.ldelim();
    }

    const checkNativeAddressResult = message.checkNativeAddressResult;
    if (checkNativeAddressResult !== null) {
      writer.uint32(90);
      writer.fork();
      CheckNativeAddressResult.encode(checkNativeAddressResult, writer);
      writer.ldelim();
    }

    const checkNativePubKeyResult = message.checkNativePubKeyResult;
    if (checkNativePubKeyResult !== null) {
      writer.uint32(98);
      writer.fork();
      CheckNativePubKeyResult.encode(checkNativePubKeyResult, writer);
      writer.ldelim();
    }

    const checkNativeSigResult = message.checkNativeSigResult;
    if (checkNativeSigResult !== null) {
      writer.uint32(106);
      writer.fork();
      CheckNativeSigResult.encode(checkNativeSigResult, writer);
      writer.ldelim();
    }

    const checkNativeHashResult = message.checkNativeHashResult;
    if (checkNativeHashResult !== null) {
      writer.uint32(114);
      writer.fork();
      CheckNativeHashResult.encode(checkNativeHashResult, writer);
      writer.ldelim();
    }

    const checkNativeAmountResult = message.checkNativeAmountResult;
    if (checkNativeAmountResult !== null) {
      writer.uint32(122);
      writer.fork();
      CheckNativeAmountResult.encode(checkNativeAmountResult, writer);
      writer.ldelim();
    }

    const addNativeAmountsResult = message.addNativeAmountsResult;
    if (addNativeAmountsResult !== null) {
      writer.uint32(130);
      writer.fork();
      AddNativeAmountsResult.encode(addNativeAmountsResult, writer);
      writer.ldelim();
    }

    const subNativeAmountsResult = message.subNativeAmountsResult;
    if (subNativeAmountsResult !== null) {
      writer.uint32(138);
      writer.fork();
      SubNativeAmountsResult.encode(subNativeAmountsResult, writer);
      writer.ldelim();
    }

    const mulNativeAmountResult = message.mulNativeAmountResult;
    if (mulNativeAmountResult !== null) {
      writer.uint32(146);
      writer.fork();
      MulNativeAmountResult.encode(mulNativeAmountResult, writer);
      writer.ldelim();
    }

    const scalarDivRemNativeAmountResult =
      message.scalarDivRemNativeAmountResult;
    if (scalarDivRemNativeAmountResult !== null) {
      writer.uint32(154);
      writer.fork();
      ScalarDivRemNativeAmountResult.encode(
        scalarDivRemNativeAmountResult,
        writer
      );
      writer.ldelim();
    }

    const divRemNativeAmountResult = message.divRemNativeAmountResult;
    if (divRemNativeAmountResult !== null) {
      writer.uint32(162);
      writer.fork();
      DivRemNativeAmountResult.encode(divRemNativeAmountResult, writer);
      writer.ldelim();
    }

    const checkedAddNativeTimeResult = message.checkedAddNativeTimeResult;
    if (checkedAddNativeTimeResult !== null) {
      writer.uint32(170);
      writer.fork();
      CheckedAddNativeTimeResult.encode(checkedAddNativeTimeResult, writer);
      writer.ldelim();
    }

    const checkedSubNativeTimeResult = message.checkedSubNativeTimeResult;
    if (checkedSubNativeTimeResult !== null) {
      writer.uint32(178);
      writer.fork();
      CheckedSubNativeTimeResult.encode(checkedSubNativeTimeResult, writer);
      writer.ldelim();
    }

    const checkedMulNativeTimeResult = message.checkedMulNativeTimeResult;
    if (checkedMulNativeTimeResult !== null) {
      writer.uint32(186);
      writer.fork();
      CheckedMulNativeTimeResult.encode(checkedMulNativeTimeResult, writer);
      writer.ldelim();
    }

    const checkedScalarDivRemNativeTimeResult =
      message.checkedScalarDivRemNativeTimeResult;
    if (checkedScalarDivRemNativeTimeResult !== null) {
      writer.uint32(194);
      writer.fork();
      CheckedScalarDivRemNativeTimeResult.encode(
        checkedScalarDivRemNativeTimeResult,
        writer
      );
      writer.ldelim();
    }

    const checkedDivRemNativeTimeResult = message.checkedDivRemNativeTimeResult;
    if (checkedDivRemNativeTimeResult !== null) {
      writer.uint32(202);
      writer.fork();
      CheckedDivRemNativeTimeResult.encode(
        checkedDivRemNativeTimeResult,
        writer
      );
      writer.ldelim();
    }

    const compareNativeTimeResult = message.compareNativeTimeResult;
    if (compareNativeTimeResult !== null) {
      writer.uint32(210);
      writer.fork();
      CompareNativeTimeResult.encode(compareNativeTimeResult, writer);
      writer.ldelim();
    }

    const compareNativeAddressResult = message.compareNativeAddressResult;
    if (compareNativeAddressResult !== null) {
      writer.uint32(218);
      writer.fork();
      CompareNativeAddressResult.encode(compareNativeAddressResult, writer);
      writer.ldelim();
    }

    const compareNativePubKeyResult = message.compareNativePubKeyResult;
    if (compareNativePubKeyResult !== null) {
      writer.uint32(226);
      writer.fork();
      CompareNativePubKeyResult.encode(compareNativePubKeyResult, writer);
      writer.ldelim();
    }

    const compareNativeSigResult = message.compareNativeSigResult;
    if (compareNativeSigResult !== null) {
      writer.uint32(234);
      writer.fork();
      CompareNativeSigResult.encode(compareNativeSigResult, writer);
      writer.ldelim();
    }

    const verifyNativeSigResult = message.verifyNativeSigResult;
    if (verifyNativeSigResult !== null) {
      writer.uint32(242);
      writer.fork();
      VerifyNativeSigResult.encode(verifyNativeSigResult, writer);
      writer.ldelim();
    }

    const compareNativeAmountResult = message.compareNativeAmountResult;
    if (compareNativeAmountResult !== null) {
      writer.uint32(250);
      writer.fork();
      CompareNativeAmountResult.encode(compareNativeAmountResult, writer);
      writer.ldelim();
    }

    const keccak256Result = message.keccak256Result;
    if (keccak256Result !== null) {
      writer.uint32(258);
      writer.fork();
      Keccak256Result.encode(keccak256Result, writer);
      writer.ldelim();
    }

    const verifyEvmSigResult = message.verifyEvmSigResult;
    if (verifyEvmSigResult !== null) {
      writer.uint32(266);
      writer.fork();
      VerifyEvmSigResult.encode(verifyEvmSigResult, writer);
      writer.ldelim();
    }

    const verifyBlsSingleSigResult = message.verifyBlsSingleSigResult;
    if (verifyBlsSingleSigResult !== null) {
      writer.uint32(274);
      writer.fork();
      VerifyBlsSingleSigResult.encode(verifyBlsSingleSigResult, writer);
      writer.ldelim();
    }

    const verifyBlsMultiSigResult = message.verifyBlsMultiSigResult;
    if (verifyBlsMultiSigResult !== null) {
      writer.uint32(282);
      writer.fork();
      VerifyBlsMultiSigResult.encode(verifyBlsMultiSigResult, writer);
      writer.ldelim();
    }

    const transferCoinsResult = message.transferCoinsResult;
    if (transferCoinsResult !== null) {
      writer.uint32(290);
      writer.fork();
      TransferCoinsResult.encode(transferCoinsResult, writer);
      writer.ldelim();
    }

    const generateEventResult = message.generateEventResult;
    if (generateEventResult !== null) {
      writer.uint32(298);
      writer.fork();
      GenerateEventResult.encode(generateEventResult, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): RespResult {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new RespResult();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nativeAddressToStringResult =
            NativeAddressToStringResult.decode(reader, reader.uint32());
          break;

        case 2:
          message.nativePubKeyToStringResult =
            NativePubKeyToStringResult.decode(reader, reader.uint32());
          break;

        case 3:
          message.nativeSigToStringResult = NativeSigToStringResult.decode(
            reader,
            reader.uint32()
          );
          break;

        case 4:
          message.nativeHashToStringResult = NativeHashToStringResult.decode(
            reader,
            reader.uint32()
          );
          break;

        case 5:
          message.nativeAmountToStringResult =
            NativeAmountToStringResult.decode(reader, reader.uint32());
          break;

        case 6:
          message.nativeAddressFromStringResult =
            NativeAddressFromStringResult.decode(reader, reader.uint32());
          break;

        case 7:
          message.nativePubKeyFromStringResult =
            NativePubKeyFromStringResult.decode(reader, reader.uint32());
          break;

        case 8:
          message.nativeSigFromStringResult = NativeSigFromStringResult.decode(
            reader,
            reader.uint32()
          );
          break;

        case 9:
          message.nativeHashFromStringResult =
            NativeHashFromStringResult.decode(reader, reader.uint32());
          break;

        case 10:
          message.nativeAmountFromStringResult =
            NativeAmountFromStringResult.decode(reader, reader.uint32());
          break;

        case 11:
          message.checkNativeAddressResult = CheckNativeAddressResult.decode(
            reader,
            reader.uint32()
          );
          break;

        case 12:
          message.checkNativePubKeyResult = CheckNativePubKeyResult.decode(
            reader,
            reader.uint32()
          );
          break;

        case 13:
          message.checkNativeSigResult = CheckNativeSigResult.decode(
            reader,
            reader.uint32()
          );
          break;

        case 14:
          message.checkNativeHashResult = CheckNativeHashResult.decode(
            reader,
            reader.uint32()
          );
          break;

        case 15:
          message.checkNativeAmountResult = CheckNativeAmountResult.decode(
            reader,
            reader.uint32()
          );
          break;

        case 16:
          message.addNativeAmountsResult = AddNativeAmountsResult.decode(
            reader,
            reader.uint32()
          );
          break;

        case 17:
          message.subNativeAmountsResult = SubNativeAmountsResult.decode(
            reader,
            reader.uint32()
          );
          break;

        case 18:
          message.mulNativeAmountResult = MulNativeAmountResult.decode(
            reader,
            reader.uint32()
          );
          break;

        case 19:
          message.scalarDivRemNativeAmountResult =
            ScalarDivRemNativeAmountResult.decode(reader, reader.uint32());
          break;

        case 20:
          message.divRemNativeAmountResult = DivRemNativeAmountResult.decode(
            reader,
            reader.uint32()
          );
          break;

        case 21:
          message.checkedAddNativeTimeResult =
            CheckedAddNativeTimeResult.decode(reader, reader.uint32());
          break;

        case 22:
          message.checkedSubNativeTimeResult =
            CheckedSubNativeTimeResult.decode(reader, reader.uint32());
          break;

        case 23:
          message.checkedMulNativeTimeResult =
            CheckedMulNativeTimeResult.decode(reader, reader.uint32());
          break;

        case 24:
          message.checkedScalarDivRemNativeTimeResult =
            CheckedScalarDivRemNativeTimeResult.decode(reader, reader.uint32());
          break;

        case 25:
          message.checkedDivRemNativeTimeResult =
            CheckedDivRemNativeTimeResult.decode(reader, reader.uint32());
          break;

        case 26:
          message.compareNativeTimeResult = CompareNativeTimeResult.decode(
            reader,
            reader.uint32()
          );
          break;

        case 27:
          message.compareNativeAddressResult =
            CompareNativeAddressResult.decode(reader, reader.uint32());
          break;

        case 28:
          message.compareNativePubKeyResult = CompareNativePubKeyResult.decode(
            reader,
            reader.uint32()
          );
          break;

        case 29:
          message.compareNativeSigResult = CompareNativeSigResult.decode(
            reader,
            reader.uint32()
          );
          break;

        case 30:
          message.verifyNativeSigResult = VerifyNativeSigResult.decode(
            reader,
            reader.uint32()
          );
          break;

        case 31:
          message.compareNativeAmountResult = CompareNativeAmountResult.decode(
            reader,
            reader.uint32()
          );
          break;

        case 32:
          message.keccak256Result = Keccak256Result.decode(
            reader,
            reader.uint32()
          );
          break;

        case 33:
          message.verifyEvmSigResult = VerifyEvmSigResult.decode(
            reader,
            reader.uint32()
          );
          break;

        case 34:
          message.verifyBlsSingleSigResult = VerifyBlsSingleSigResult.decode(
            reader,
            reader.uint32()
          );
          break;

        case 35:
          message.verifyBlsMultiSigResult = VerifyBlsMultiSigResult.decode(
            reader,
            reader.uint32()
          );
          break;

        case 36:
          message.transferCoinsResult = TransferCoinsResult.decode(
            reader,
            reader.uint32()
          );
          break;

        case 37:
          message.generateEventResult = GenerateEventResult.decode(
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

  nativeAddressToStringResult: NativeAddressToStringResult | null;
  nativePubKeyToStringResult: NativePubKeyToStringResult | null;
  nativeSigToStringResult: NativeSigToStringResult | null;
  nativeHashToStringResult: NativeHashToStringResult | null;
  nativeAmountToStringResult: NativeAmountToStringResult | null;
  nativeAddressFromStringResult: NativeAddressFromStringResult | null;
  nativePubKeyFromStringResult: NativePubKeyFromStringResult | null;
  nativeSigFromStringResult: NativeSigFromStringResult | null;
  nativeHashFromStringResult: NativeHashFromStringResult | null;
  nativeAmountFromStringResult: NativeAmountFromStringResult | null;
  checkNativeAddressResult: CheckNativeAddressResult | null;
  checkNativePubKeyResult: CheckNativePubKeyResult | null;
  checkNativeSigResult: CheckNativeSigResult | null;
  checkNativeHashResult: CheckNativeHashResult | null;
  checkNativeAmountResult: CheckNativeAmountResult | null;
  addNativeAmountsResult: AddNativeAmountsResult | null;
  subNativeAmountsResult: SubNativeAmountsResult | null;
  mulNativeAmountResult: MulNativeAmountResult | null;
  scalarDivRemNativeAmountResult: ScalarDivRemNativeAmountResult | null;
  divRemNativeAmountResult: DivRemNativeAmountResult | null;
  checkedAddNativeTimeResult: CheckedAddNativeTimeResult | null;
  checkedSubNativeTimeResult: CheckedSubNativeTimeResult | null;
  checkedMulNativeTimeResult: CheckedMulNativeTimeResult | null;
  checkedScalarDivRemNativeTimeResult: CheckedScalarDivRemNativeTimeResult | null;
  checkedDivRemNativeTimeResult: CheckedDivRemNativeTimeResult | null;
  compareNativeTimeResult: CompareNativeTimeResult | null;
  compareNativeAddressResult: CompareNativeAddressResult | null;
  compareNativePubKeyResult: CompareNativePubKeyResult | null;
  compareNativeSigResult: CompareNativeSigResult | null;
  verifyNativeSigResult: VerifyNativeSigResult | null;
  compareNativeAmountResult: CompareNativeAmountResult | null;
  keccak256Result: Keccak256Result | null;
  verifyEvmSigResult: VerifyEvmSigResult | null;
  verifyBlsSingleSigResult: VerifyBlsSingleSigResult | null;
  verifyBlsMultiSigResult: VerifyBlsMultiSigResult | null;
  transferCoinsResult: TransferCoinsResult | null;
  generateEventResult: GenerateEventResult | null;

  constructor(
    nativeAddressToStringResult: NativeAddressToStringResult | null = null,
    nativePubKeyToStringResult: NativePubKeyToStringResult | null = null,
    nativeSigToStringResult: NativeSigToStringResult | null = null,
    nativeHashToStringResult: NativeHashToStringResult | null = null,
    nativeAmountToStringResult: NativeAmountToStringResult | null = null,
    nativeAddressFromStringResult: NativeAddressFromStringResult | null = null,
    nativePubKeyFromStringResult: NativePubKeyFromStringResult | null = null,
    nativeSigFromStringResult: NativeSigFromStringResult | null = null,
    nativeHashFromStringResult: NativeHashFromStringResult | null = null,
    nativeAmountFromStringResult: NativeAmountFromStringResult | null = null,
    checkNativeAddressResult: CheckNativeAddressResult | null = null,
    checkNativePubKeyResult: CheckNativePubKeyResult | null = null,
    checkNativeSigResult: CheckNativeSigResult | null = null,
    checkNativeHashResult: CheckNativeHashResult | null = null,
    checkNativeAmountResult: CheckNativeAmountResult | null = null,
    addNativeAmountsResult: AddNativeAmountsResult | null = null,
    subNativeAmountsResult: SubNativeAmountsResult | null = null,
    mulNativeAmountResult: MulNativeAmountResult | null = null,
    scalarDivRemNativeAmountResult: ScalarDivRemNativeAmountResult | null = null,
    divRemNativeAmountResult: DivRemNativeAmountResult | null = null,
    checkedAddNativeTimeResult: CheckedAddNativeTimeResult | null = null,
    checkedSubNativeTimeResult: CheckedSubNativeTimeResult | null = null,
    checkedMulNativeTimeResult: CheckedMulNativeTimeResult | null = null,
    checkedScalarDivRemNativeTimeResult: CheckedScalarDivRemNativeTimeResult | null = null,
    checkedDivRemNativeTimeResult: CheckedDivRemNativeTimeResult | null = null,
    compareNativeTimeResult: CompareNativeTimeResult | null = null,
    compareNativeAddressResult: CompareNativeAddressResult | null = null,
    compareNativePubKeyResult: CompareNativePubKeyResult | null = null,
    compareNativeSigResult: CompareNativeSigResult | null = null,
    verifyNativeSigResult: VerifyNativeSigResult | null = null,
    compareNativeAmountResult: CompareNativeAmountResult | null = null,
    keccak256Result: Keccak256Result | null = null,
    verifyEvmSigResult: VerifyEvmSigResult | null = null,
    verifyBlsSingleSigResult: VerifyBlsSingleSigResult | null = null,
    verifyBlsMultiSigResult: VerifyBlsMultiSigResult | null = null,
    transferCoinsResult: TransferCoinsResult | null = null,
    generateEventResult: GenerateEventResult | null = null
  ) {
    this.nativeAddressToStringResult = nativeAddressToStringResult;
    this.nativePubKeyToStringResult = nativePubKeyToStringResult;
    this.nativeSigToStringResult = nativeSigToStringResult;
    this.nativeHashToStringResult = nativeHashToStringResult;
    this.nativeAmountToStringResult = nativeAmountToStringResult;
    this.nativeAddressFromStringResult = nativeAddressFromStringResult;
    this.nativePubKeyFromStringResult = nativePubKeyFromStringResult;
    this.nativeSigFromStringResult = nativeSigFromStringResult;
    this.nativeHashFromStringResult = nativeHashFromStringResult;
    this.nativeAmountFromStringResult = nativeAmountFromStringResult;
    this.checkNativeAddressResult = checkNativeAddressResult;
    this.checkNativePubKeyResult = checkNativePubKeyResult;
    this.checkNativeSigResult = checkNativeSigResult;
    this.checkNativeHashResult = checkNativeHashResult;
    this.checkNativeAmountResult = checkNativeAmountResult;
    this.addNativeAmountsResult = addNativeAmountsResult;
    this.subNativeAmountsResult = subNativeAmountsResult;
    this.mulNativeAmountResult = mulNativeAmountResult;
    this.scalarDivRemNativeAmountResult = scalarDivRemNativeAmountResult;
    this.divRemNativeAmountResult = divRemNativeAmountResult;
    this.checkedAddNativeTimeResult = checkedAddNativeTimeResult;
    this.checkedSubNativeTimeResult = checkedSubNativeTimeResult;
    this.checkedMulNativeTimeResult = checkedMulNativeTimeResult;
    this.checkedScalarDivRemNativeTimeResult =
      checkedScalarDivRemNativeTimeResult;
    this.checkedDivRemNativeTimeResult = checkedDivRemNativeTimeResult;
    this.compareNativeTimeResult = compareNativeTimeResult;
    this.compareNativeAddressResult = compareNativeAddressResult;
    this.compareNativePubKeyResult = compareNativePubKeyResult;
    this.compareNativeSigResult = compareNativeSigResult;
    this.verifyNativeSigResult = verifyNativeSigResult;
    this.compareNativeAmountResult = compareNativeAmountResult;
    this.keccak256Result = keccak256Result;
    this.verifyEvmSigResult = verifyEvmSigResult;
    this.verifyBlsSingleSigResult = verifyBlsSingleSigResult;
    this.verifyBlsMultiSigResult = verifyBlsMultiSigResult;
    this.transferCoinsResult = transferCoinsResult;
    this.generateEventResult = generateEventResult;
  }
}

export function encodeRespResult(message: RespResult): Uint8Array {
  return Protobuf.encode(message, RespResult.encode);
}

export function decodeRespResult(buffer: Uint8Array): RespResult {
  return Protobuf.decode<RespResult>(buffer, RespResult.decode);
}