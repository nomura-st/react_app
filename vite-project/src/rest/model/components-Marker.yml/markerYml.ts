/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * REST API仕様
 * BackEndのREST API仕様です
 * OpenAPI spec version: 1.0.0
 */
import type { CommentYml } from '../components-Comment.yml/commentYml';

/**
 * Markerオブジェクト
 */
export interface MarkerYml {
  /** ID */
  id: number;
  /** 登録日付 */
  datetime: string;
  /** 緯度(latitude) */
  lat?: number;
  /** 経度(longitude) */
  lng?: number;
  /** 高度(altitude) */
  alt?: number;
  comment?: CommentYml;
  /** 画像ID */
  imageId?: number;
}