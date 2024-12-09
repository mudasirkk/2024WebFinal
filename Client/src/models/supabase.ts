export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      product: {
        Row: {
          brand: string | null
          category: string
          createdat: string | null
          description: string | null
          dimensions: Json
          id: number
          images: string[]
          minimumorderquantity: number
          price: number
          rating: number | null
          returnpolicy: string
          tags: string[]
          thumbnail: string
          title: string
          updatedat: string | null
          weight: number
        }
        Insert: {
          brand?: string | null
          category: string
          createdat?: string | null
          description?: string | null
          dimensions: Json
          id?: number
          images: string[]
          minimumorderquantity: number
          price: number
          rating?: number | null
          returnpolicy: string
          tags: string[]
          thumbnail: string
          title: string
          updatedat?: string | null
          weight: number
        }
        Update: {
          brand?: string | null
          category?: string
          createdat?: string | null
          description?: string | null
          dimensions?: Json
          id?: number
          images?: string[]
          minimumorderquantity?: number
          price?: number
          rating?: number | null
          returnpolicy?: string
          tags?: string[]
          thumbnail?: string
          title?: string
          updatedat?: string | null
          weight?: number
        }
        Relationships: []
      }
      products: {
        Row: {
          brand: string | null
          category: string
          createdAt: string | null
          description: string
          dimensions: Json
          id: number
          images: string[]
          minimumOrderQuantity: number
          price: number
          rating: number
          returnPolicy: string
          tags: string[]
          thumbnail: string
          title: string
          updatedAt: string | null
          weight: number
        }
        Insert: {
          brand?: string | null
          category: string
          createdAt?: string | null
          description: string
          dimensions: Json
          id?: number
          images: string[]
          minimumOrderQuantity: number
          price: number
          rating: number
          returnPolicy: string
          tags: string[]
          thumbnail: string
          title: string
          updatedAt?: string | null
          weight: number
        }
        Update: {
          brand?: string | null
          category?: string
          createdAt?: string | null
          description?: string
          dimensions?: Json
          id?: number
          images?: string[]
          minimumOrderQuantity?: number
          price?: number
          rating?: number
          returnPolicy?: string
          tags?: string[]
          thumbnail?: string
          title?: string
          updatedAt?: string | null
          weight?: number
        }
        Relationships: []
      }
      review: {
        Row: {
          comment: string
          createdat: string | null
          date: string
          id: number
          product_id: number | null
          rating: number
          revieweremail: string
          reviewername: string
          updatedat: string | null
        }
        Insert: {
          comment: string
          createdat?: string | null
          date: string
          id?: number
          product_id?: number | null
          rating: number
          revieweremail: string
          reviewername: string
          updatedat?: string | null
        }
        Update: {
          comment?: string
          createdat?: string | null
          date?: string
          id?: number
          product_id?: number | null
          rating?: number
          revieweremail?: string
          reviewername?: string
          updatedat?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'review_product_id_fkey'
            columns: ['product_id']
            isOneToOne: false
            referencedRelation: 'product'
            referencedColumns: ['id']
          }
        ]
      }
      reviews: {
        Row: {
          comment: string
          createdAt: string | null
          date: string
          id: number
          productId: number
          rating: number
          reviewerEmail: string
          reviewerName: string
          updatedAt: string | null
        }
        Insert: {
          comment: string
          createdAt?: string | null
          date: string
          id?: number
          productId: number
          rating: number
          reviewerEmail: string
          reviewerName: string
          updatedAt?: string | null
        }
        Update: {
          comment?: string
          createdAt?: string | null
          date?: string
          id?: number
          productId?: number
          rating?: number
          reviewerEmail?: string
          reviewerName?: string
          updatedAt?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'reviews_productId_fkey'
            columns: ['productId']
            isOneToOne: false
            referencedRelation: 'products'
            referencedColumns: ['id']
          }
        ]
      }
      tags: {
        Row: {
          created_at: string | null
          id: number
          name: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          name: string
        }
        Update: {
          created_at?: string | null
          id?: number
          name?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, 'public'>]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    ? (PublicSchema['Tables'] & PublicSchema['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends keyof PublicSchema['Tables'] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends keyof PublicSchema['Tables'] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends keyof PublicSchema['Enums'] | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
    ? PublicSchema['Enums'][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema['CompositeTypes']
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema['CompositeTypes']
    ? PublicSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never